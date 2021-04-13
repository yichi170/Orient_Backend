# Generated by Django 3.1.7 on 2021-04-12 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='groups',
            name='group_id',
        ),
        migrations.RemoveField(
            model_name='hint',
            name='hint_id',
        ),
        migrations.RemoveField(
            model_name='hints',
            name='hint_id',
        ),
        migrations.AddField(
            model_name='hint',
            name='difficulty',
            field=models.CharField(default='null', max_length=100),
        ),
        migrations.AlterField(
            model_name='groups',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='hint',
            name='hint_choices',
            field=models.CharField(choices=[(1, 'standard'), (2, 'interactive'), (3, 'photo'), (4, 'fuck')], max_length=40),
        ),
        migrations.AlterField(
            model_name='hint',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='hints',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]