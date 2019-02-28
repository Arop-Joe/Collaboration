from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from .models import imgdb
def index(request):
    return render(request, 'dashboard/index.html')

def imupload(request):
    try:
        if request.method == 'POST':
            title = request.POST['title']
            desc = request.POST['desc']
            img = request.FILES['f1']
            print(img.name)
            print(img.size)
            fs = FileSystemStorage()
            fs.save(img.name, img)

            im = imgdb()
            im.title = title
            im.desc = desc
            im.impath = img
            im.save()
            return render(request, 'dashboard/index.html')
    except Exception as e:
            return render(request, 'dashboard/upload_error.html', {'error': str(e)})
