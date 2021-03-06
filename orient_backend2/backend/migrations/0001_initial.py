# Generated by Django 3.1.7 on 2021-04-21 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Groups',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('score', models.IntegerField()),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Groupsinfo',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Hint',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('hint_choices', models.CharField(choices=[(1, 'standard'), (2, 'interactive'), (3, 'photo'), (4, 'fuck')], max_length=40)),
                ('difficulty', models.CharField(default='null', max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('text', models.CharField(max_length=100)),
                ('answer', models.CharField(max_length=100)),
                ('basic_score', models.IntegerField()),
                ('bonus_score', models.IntegerField()),
                ('penalty', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Hints',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('hint_id', models.IntegerField(default=0)),
                ('done_by', models.IntegerField(default=0)),
                ('avail', models.CharField(default='', max_length=10)),
                ('done', models.CharField(default='', max_length=10)),
                ('whichgroup', models.ManyToManyField(related_name='hints', to='backend.Groupsinfo')),
            ],
        ),
    ]
