import time
import math
from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse
from rest_framework.decorators import permission_classes
from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import FibonaaciSerializer
from .models import FibonacciNumbers

@permission_classes((permissions.AllowAny,))
class Fibonaaci(APIView):
	serializer_class = FibonaaciSerializer

	def get(self, request):
		return render(request, 'fibonacci/fib.html', {})

	def post(self, request):
		start_time = time.time()
		serializer = FibonaaciSerializer(data=request.data)
		if serializer.is_valid():
			n = request.POST.get('fib_number')
			try:
				PHI = (1 + math.sqrt(5)) / 2
				SQRT5 = math.sqrt(5)
				fib = round(math.pow(PHI, int(n)) / SQRT5)
				# FibonacciNumbers.objects.create(fib_number=int(n), fib_result=fib)
			except Exception as e:
				messages.add_message(request, messages.ERROR, str(e))
				return HttpResponseRedirect(reverse("fibonacci"))
			total_time = (time.time() - start_time) % 60
			return render(request, 'fibonacci/fib.html', {'fib_number': n,"fib": fib,'total_time': total_time})
		else:
			error_message = "%s" % serializer.errors['fib_number'][0]
			messages.add_message(request, messages.ERROR, error_message)
			return HttpResponseRedirect(reverse("fibonacci"))


