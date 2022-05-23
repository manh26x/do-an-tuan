document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    let min_time ;
    let max_time;
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        selectable: true,
        headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        slotLabelInterval: "01:00",
        weekends: true,
        slotDuration: "01:00:00",
        slotMinTime: '09:00:00',
        slotMaxTime: '22:00:00',
        events: [
            {
                title:  'My Event',
                start:  '2010-01-01T14:30:00',
                allDay: false
            }
            // other events here...
        ],
        editable: true,
        dayMaxEvents: true,
        selectMirror: true,
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: false
        },
        views: {
            agendaFourHours: {
                type: 'agenda',
                axisFormat: 'H:mm',
                timeFormat: 'H:mm',
                minTime: min_time,
                maxTime: max_time,
            }
        },
        titleFormat: function(date) {
            const yyyy = date.date.year;
            let mm = date.date.month + 1; // Months start at 0!
            let dd = date.date.day;

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            return dd + '/' + mm + '/' + yyyy;
        },
        select: function(info) {
            console.log("selected " + info.startStr + " to " + info.endStr);
        }
    });
    calendar.render();
});

