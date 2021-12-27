'use strict'

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  // 先月分の日数
  function getCalendarHead(){
    const dates = [];
    const d = new Date(year, month, 0).getDate();    //前月の末日
    const n = new Date(year, month, 1).getDay();     //当月1日の曜日

    for(let i = 0;i < n;i++){
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  //翌月分の日数
  function getCalendarTail(){
    const dates = [];
    const lastDay = new Date(year. month + 1, 0).getDay();

    for(let i = 1;i < 7-lastDay; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false 
      })
    }

    return dates;
  }

  //当月分の日数
  function getCalendarBody(){
    const dates = []; // date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    for(let i = 1; i <= lastDate; i++){
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false
      });
    }

    //　今日の日付は太字にする
    if(year === today.getFullYear() && month === today.getMonth()){
      dates[today.getDate()-1].isToday = true;
    }

    return dates;
  }

  function clearCalendar(){
    //tbodyを初期化
    const tbody = document.querySelector('tbody');

    //よくあるテクニック・・子要素がある限り取り除いていく
    while(tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }
  }

  function renderTitle(){
    const title = year + "/" + String( month + 1 ).padStart(2, "0");
    document.getElementById('title').textContent = title;
  }

  function renderWeeks(){
    const weeks = [];
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];
    const weeksCount = dates.length / 7 ;

    for(let i = 0; i < weeksCount;i++){
      weeks.push(dates.splice(0, 7))
    }
    
    weeks.forEach(function(week){
      const tr = document.createElement('tr');

      week.forEach(function(date){
        const td = document.createElement('td');
        td.textContent = date.date;

        if(date.isToday){
          td.classList.add('today');
        }

        if(date.isDisabled){
          td.classList.add('disabled');
        }

        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr)
    });
  }

  function createCalendar(){
    clearCalendar();
    renderTitle();
    renderWeeks();
  }

  //main

  document.getElementById('prev').addEventListener('click', function(){
    month--;

    if(month < 0){
      year--;
      month = 11;
    }
    createCalendar();
  });

  document.getElementById('next').addEventListener('click', function(){
    month++;

    if(month > 11){
      year++;
      month = 0;
    }
    createCalendar();
  });

  document.getElementById('today').addEventListener('click', function(){
    year = today.getFullYear();
    month = today.getMonth();

    createCalendar();
  });

  createCalendar();
}// 全体のカッコ
