if (elements(by.tag('header')).elements(by.css('.user-block')).elements(by.attr('ng-model', 'email')).first

  ().text() == 'a@x.com') {
  alert('Задание выполнено!');
}