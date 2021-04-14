from rest_framework import serializers
from .models import Groups
from .models import Hints
from .models import Hint

class HintsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hints
        fields = "__all__"
        # fields = ['id', 'name', 'done']

class HintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hint
        fields = ('id', 'hint_type', 'hint_choices', 'difficulty', 'name', 'text', 'answer', 'basic_score', 'bonus_score', 'penalty')

class GroupsSerializer(serializers.ModelSerializer):
    hints = HintsSerializer(read_only=False, many=True)
    class Meta:
        model = Groups
        # fields = "__all__"
        fields = ['id', 'score', 'name', 'hints']
        # fields = ('id', 'score', 'name')
    def create(self, validated_data):
        hints_data = validated_data.pop('hints')
        groups = Groups.objects.create(**validated_data)
        for hint_data in hints_data:
            Hints.objects.create(groups=groups, **hint_data)
        return groups
    # def update(self, instance, validated_data):
    #     instance.done = validated_data.get('done', instance.done)
    #     instance.save()
    #     return instance