from django.test import TestCase
# from .views import Fibonaaci
# Create your tests here.
from numpy import matrix
import os
import math
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fibonacci.settings")

import unittest

class TestFibonacciFunctions(unittest.TestCase):
    def test_fibonacci(self):
        expected_result = 8
        n=6
        PHI = (1 + math.sqrt(5)) / 2
        SQRT5 = math.sqrt(5)
        fib = round(math.pow(PHI, int(n)) / SQRT5)
        self.assertEqual(expected_result,fib, "fibonacci unit test")

if __name__ == '__main__' :
    unittest.main()