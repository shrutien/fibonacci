from django.shortcuts import render
from rest_framework.decorators import permission_classes
from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import FibonaaciSerializer
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse
from numpy import matrix
import time


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
				fib = ((matrix([[1, 1], [1, 0]])) ** (int(n) - 1))
			except Exception as e:
				messages.add_message(request, messages.ERROR, str(e))
				return HttpResponseRedirect(reverse("fibonacci"))
			total_time = (time.time() - start_time) % 60
			return render(request, 'fibonacci/fib.html', {'fib_number': n,"fib": fib[0, 0],'total_time': total_time})
		else:
			error_message = "Error : %s" % serializer.errors['fib_number']
			messages.add_message(request, messages.ERROR, error_message)
			return HttpResponseRedirect(reverse("fibonacci"))


