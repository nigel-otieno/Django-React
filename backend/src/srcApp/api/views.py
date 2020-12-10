from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import PostSerializer
from srcApp.models import Post

class PostListView(ListAPIView):
    queryset= Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(RetrieveAPIView):
    queryset= Post.objects.all()
    serializer_class = PostSerializer