freezing-nemesis-mif
====================
Условие:
-------
Допишите необходимый js, что бы код ниже выполнялся:

```
if (elements(by.tag('header')).elements(by.css('.user-block')).elements(by.attr('ng-model', 'email')).first

().text() == 'a@x.com') {
 alert('Задание выполнено!');
}
```

При условии, что на странице есть  такой фрагмент HTML

```
<header>
 <div class="user-block">
  <div ng-model="email">a@x.com</div>
 </div>
</header>
```

Что либо из внешних библиотек использовать нельзя.
Для поиска по DOM можно использовать document.querySelectorAll
