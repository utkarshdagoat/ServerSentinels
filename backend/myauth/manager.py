from django.contrib.auth.models import  BaseUserManager

class MyUserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            username= username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
      
        user = self.create_user(
            username=username,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user