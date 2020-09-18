export default function Calendar(object) {
  this.num = 0;
  this.object = object;
  this.months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  this.month = [];
  this.dateArray = [];
  this.counter = 1;
  this.helpDate = new Date();
  this.today = new Date(this.helpDate.getFullYear(),this.helpDate.getMonth()+this.num, this.helpDate.getDate());
  this.lastDay = new Date (this.today.getFullYear(), this.today.getMonth() + 1);
  this.prevMonthLastDay = new Date (this.today.getFullYear(),this.today.getMonth());
  this.nextMonth = new Date (this.today.getFullYear(),this.today.getMonth() + 1);
  this.prevMonthLastDay.setDate(this.prevMonthLastDay.getDate() - 1);
  this.lastDay.setDate(this.lastDay.getDate() - 1);
  this.init = function (val = this.num) {
    this.today = new Date(this.helpDate.getFullYear(),this.helpDate.getMonth()+val, this.helpDate.getDate());
    this.lastDay = new Date (this.today.getFullYear(), this.today.getMonth() + 1);
    this.prevMonthLastDay = new Date (this.today.getFullYear(),this.today.getMonth());
    this.nextMonth = new Date (this.today.getFullYear(),this.today.getMonth() + 1);
    this.prevMonthLastDay.setDate(this.prevMonthLastDay.getDate() - 1);
    this.lastDay.setDate(this.lastDay.getDate() - 1);
  }
  this.render = function () {
    for (let i = 1; i <= this.lastDay.getDate(); i++) {
      this.month.push(i)
    };

    do {if(this.prevMonthLastDay.getDay() < 1) {
        break;
    }
      this.object.find('.calendar__days').prepend(`<div class=prev-date data-date=${this.prevMonthLastDay.getDate()}.${('0'+(this.prevMonthLastDay.getMonth()+1)).split('').slice(-2).join('')}.${this.prevMonthLastDay.getFullYear()}>${this.prevMonthLastDay.getDate()}</div>`);
      this.prevMonthLastDay.setDate(this.prevMonthLastDay.getDate() - 1);
    }while (true);

    for (let x = 1; x <= this.month.length; x++) {
      this.object.find('.calendar__days').append(`<div data-date=${('0' + x).split('').slice(-2).join('')}.${('0'+(this.today.getMonth()+1)).split('').slice(-2).join('')}.${this.today.getFullYear()}>${x}</div>`);
    }
    do {
      this.object.find('.calendar__days').append(`<div class=next-date data-date=${('0' + this.nextMonth.getDate()).split('').slice(-2).join('')}.${('0'+(this.nextMonth.getMonth()+1)).split('').slice(-2).join('')}.${this.nextMonth.getFullYear()}>${this.nextMonth.getDate()}</div>`);
      if (this.nextMonth.getDay() == 0) {
        break;
      }
      this.nextMonth.setDate(this.nextMonth.getDate() + 1);
    } while (true);

    let counter = this.counter;
    this.object.find('.calendar__days>div').each(function(index,elem) {
      $(this).attr('data-val', counter++)
    });
    // this.object.find('.days>div').filter((undefind, elem) => $(elem).text() == this.today.getDate()).addClass('today');
    this.object.find('.calendar__days>div').filter(function (undefind, elem){
      let splitDate =  $(elem).attr('data-date').split('.');
      let today = new Date();
      if (today.getFullYear() == splitDate[2] && today.getMonth() == (splitDate[1]-1) && today.getDate() == splitDate[0]) {
        return true;
      }
    }).addClass('today');
    this.object.find('.calendar__month-year').text(`${this.months[this.today.getMonth()]} ${this.today.getFullYear()}`);
  }
  this.next = function () {
    this.object.find('.calendar__days>div').remove();
    ++this.num;
    this.month.length = 0;
    this.init();
    this.render();
  }
  this.prev = function () {
    this.object.find('.calendar__days>div').remove();
    --this.num;
    this.month.length = 0;
    this.init();
    this.render();
  }
  this.range = function (obj,arr = this.dateArray) {
    if (this.object.find('.selected').length && !this.dateArray.length) {
      if (+obj.attr('data-val') < +this.object.find('.selected').attr('data-val')) {
        this.object.find('.selected').removeClass('selected').addClass('end-range');
        obj.addClass('start-range');
        this.object.find('.start-range').nextUntil('.end-range').addClass('inrange');
      } else {
        this.object.find('.selected').removeClass('selected').addClass('start-range');
        obj.addClass('end-range');
        this.object.find('.start-range').nextUntil('.end-range').addClass('inrange');
      }
    } else if (!this.object.find('.selected').length && !this.dateArray.length) obj.addClass('selected');
    if (this.object.find('.start-range').length) {
      this.dateArray.length = 0;
      if (+obj.attr('data-val') < +this.object.find('.start-range').attr('data-val')) {
        this.object.find('.start-range').removeClass('start-range');
        obj.addClass('start-range');
        obj.nextUntil('.inrange').addClass('inrange');
      } else if (+obj.attr('data-val') > +this.object.find('.end-range').attr('data-val')) {
        this.object.find('.end-range').removeClass('end-range');
        obj.addClass('end-range');
        this.object.find('.start-range').nextUntil('.end-range').addClass('inrange');
      } else if (obj.attr('data-val') - this.object.find('.start-range').attr('data-val') < this.object.find('.end-range').attr('data-val') - obj.attr('data-val')){
        obj.removeClass('inrange').addClass('start-range').prevAll().removeClass('start-range inrange');
      } else {
        obj.removeClass('inrange').addClass('end-range').nextAll().removeClass('end-range inrange');
      }
    }
    this.object.find('.start-range, .inrange, .end-range').each(function(ind,elem) {
      arr.push($(elem).attr('data-date'));
    });
  }
  this.getDateArr = function () {
    return [this.dateArray[0],this.dateArray[this.dateArray.length-1]];
  }
  this.reset = function () {
    this.object.find('.start-range, .end-range, .inrange').removeClass('start-range end-range inrange');
    this.dateArray.length = 0;
  }
}