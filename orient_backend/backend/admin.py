from django.contrib import admin
from .models import Groups
from .models import Hints
from .models import Hint
# Register your models here.

admin.site.register(Groups)
admin.site.register(Hints)
admin.site.register(Hint)
