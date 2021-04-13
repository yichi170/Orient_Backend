from rest_framework import serializers
from .models import Groups
from .models import Hints
from .models import Hint

class GroupsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Groups
        fields = ('id', 'score', 'name')

class HintsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hints
        fields = ('id', 'name', 'done')
class HintSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hint
        fields = ('id', 'hint_type', 'hint_choices', 'difficulty', 'name', 'text', 'answer', 'basic_score', 'bonus_score', 'penalty')
