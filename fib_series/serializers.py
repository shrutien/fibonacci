from rest_framework import serializers
from .models import FibonacciNumbers

class FibonaaciSerializer(serializers.ModelSerializer):
    class Meta:
        model = FibonacciNumbers
        fields = [
            'fib_number'

        ]

    def validate_fib_number(self, value):
        if value < 1:
            raise serializers.ValidationError("Input Value must be greater than zero")

        return value