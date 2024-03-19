from rest_framework import serializers
from core.models import Produtor

class ProdutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtor
        fields ="__all__"
 # fields = ("nome", "cpf", "email", "senha") 