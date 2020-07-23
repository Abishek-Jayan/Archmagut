from django.shortcuts import HttpResponse, render
from django.http import JsonResponse,QueryDict
from django.forms.models import model_to_dict
from .models import Note
from django.utils import timezone

def index(request):
    template_name = r'Notes/index.html'
    context = {}
    return render(request, template_name, context)


def note_core(request):
    if request.method == 'GET':
        notes = list(model_to_dict(note) for note in list(Note.objects.order_by('Position')))
        notemaker = {
            'notes': notes
        }
        return JsonResponse(notemaker)
    
    elif request.method == 'POST':
        title = request.POST.get('title')
        body = request.POST.get('body')
        position = request.POST.get('position')
        colouwer = request.POST.get('colr')
        p = Note(Title = title, Body = body, Position = position, Colour = colouwer, DateCreated=timezone.now(), DateLastUpdated=timezone.now())
        p.save()
        returner = {
            'id': p.id
        }
        return JsonResponse(returner)
    
    elif request.method == 'DELETE':
        put = QueryDict(request.body)
        id = put.get('id')
        Note.objects.filter(id=id).delete()
        return JsonResponse(id,safe=False)

def note_modify_or_something(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        body = request.POST.get('body')
        colour = request.POST.get('colour')
        id = request.POST.get('id')
        temp = Note.objects.get(id=id)
        temp.Title = title
        temp.Body = body
        temp.DateLastUpdated = timezone.now()
        temp.save()
        return JsonResponse(temp.Title,safe = False)
        
def note_colour(request):
    if request.method == 'POST':
        colour = request.POST.get('colour')
        id = request.POST.get('id')
        temp = Note.objects.get(id=id)
        temp.Colour = colour
        temp.save()
        print(temp.Colour)
        return JsonResponse(temp.Colour,safe = False)


