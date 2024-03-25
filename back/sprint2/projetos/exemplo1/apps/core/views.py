from django.shortcuts import render
from rest_framework import viewsets
from core.models import Produtor
from core.serializers import ProdutorSerializer
from rest_framework import generics
from rest_framework import mixins




class ProdutorViewSet(viewsets.ModelViewSet):
    queryset = Produtor.objects.all()
    serializer_class = ProdutorSerializer

class ProdutorListCreateAPIView(generics.GenericAPIView, 
                                mixins.ListModelMixin, 
                                mixins.CreateModelMixin):
    queryset = Produtor.objects.all()
    serializer_class = ProdutorSerializer 

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


    def post(self, request, *args, **kwargs):
        #colocar a regra de negócio para criação de produtor aqui ou no serializador
        return self.create(request, *args, **kwargs) 

class ProdutorRetrieveUpdateDestroyAPIView (generics.GenericAPIView,
                                mixins.RetrieveModelMixin,
                                mixins.UpdateModelMixin,
                                mixins.DestroyModelMixin):
    queryset = Produtor.objects.all()
    serializer_class = ProdutorSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs) 

    def put(self, request, *args, **kwargs):
        #colocar a regra de negócio para a alteração de produtor aqui ou no serializador
        return self.update(request, *args, **kwargs)

    


