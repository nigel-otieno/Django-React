# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from .serializers import PostSerializer
from srcApp.models import Post
from rest_framework import viewsets

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# class PostListView(ListAPIView):
#     queryset= Post.objects.all()
#     serializer_class = PostSerializer

# class PostDetailView(RetrieveAPIView):
#     queryset= Post.objects.all()
#     serializer_class = PostSerializer

# class PostCreateView(CreateAPIView):
#     queryset= Post.objects.all()
#     serializer_class = PostSerializer
 
# class PostUpdateView(UpdateAPIView):
#     queryset= Post.objects.all()
#     serializer_class = PostSerializer

# class PostDestroyView(DestroyAPIView):
#     queryset= Post.objects.all()
#     serializer_class = PostSerializer