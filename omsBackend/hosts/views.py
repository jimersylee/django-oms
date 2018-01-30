# -*- coding: utf-8 -*-
# author: itimor

from rest_framework import viewsets
from hosts.models import Host, Idc
from hosts.serializers import HostSerializer, IdcSerializer
from rest_framework.response import Response
from records.models import Record


class HostViewSet(viewsets.ModelViewSet):
    queryset = Host.objects.all()
    serializer_class = HostSerializer
    search_fields = ['hostname', 'ip']
    filter_fields = ['status']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        after_data = serializer.data
        host = after_data['hostname']
        # records
        Record.objects.create(
            name='hosts',
            asset=host,
            method='create',
            before='{}',
            after=after_data,
            create_user=request.user

        )
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)

    def update(self, request, *args, **kwargs):
        hostname = request.data['hostname']
        before_host = Host.objects.get(hostname=hostname)
        before_data = self.get_serializer(before_host, partial=False).data
        host = before_data['hostname']
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=False)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        after_data = serializer.data

        # records
        Record.objects.create(
            name='hosts',
            asset=host,
            method='update',
            before=before_data,
            after=after_data,
            create_user=request.user
        )
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        before_data = self.get_serializer(instance, partial=False).data
        host = before_data['hostname']
        self.perform_destroy(instance)

        # records
        Record.objects.create(
            name='hosts',
            asset=host,
            method='delete',
            before=before_data,
            after='{}',
            create_user=request.user
        )
        return Response({"code": 1024})


class IdcViewSet(viewsets.ModelViewSet):
    queryset = Idc.objects.all()
    serializer_class = IdcSerializer
    filter_fields = ['name']
