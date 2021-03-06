from srcApp.api.views import PostViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path 
from srcApp.api.views import(registration_view)

app_name = "srcApp"

urlpatterns = [
    path('register', registration_view, name="register")
]

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='posts')
router.register(r'users', UserViewSet, basename='users')

urlpatterns = router.urls



# from django.urls import path
# from .views import PostDetailView, PostListView, PostCreateView, PostUpdateView, PostDestroyView

# urlpatterns = [
#     path('', PostListView.as_view()),
#     path('create/', PostCreateView.as_view()),
#     path('<pk>/update', PostUpdateView.as_view()),
#     path('<pk>/delete', PostDestroyView.as_view()),
#     path('<pk>', PostDetailView.as_view()),
# ]