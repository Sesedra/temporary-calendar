function CalendarDays(props) {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    // retournera YYYY-MM-DD
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    // retournera 0-6
    let currentDays = [];

    for(let day = 0; day<42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        }
        else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        }
        else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }
    

    let calendarDay = {
        currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
        date: (new Date(firstDayOfMonth)),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
        year: firstDayOfMonth.getFullYear(),
        author: '',
        priority: ''
    }

    // if (calendarDay.number === 28) {
    //     calendarDay.author = 'Sedra Rabe';
    //     calendarDay.priority = 'High';
    // }

    // if (calendarDay.number === 12) {
    //     calendarDay.author = 'Taindaka';
    //     calendarDay.priority = 'Medium';
    // }

    // if (calendarDay.number === 8) {
    //     calendarDay.author = 'Serge';
    //     calendarDay.priority = 'Low';
    // }

    function addTask (month, number, year, author, priority) {
        if (calendarDay.month===month && calendarDay.number === number && calendarDay.year ===year){
            calendarDay.author = author;
            calendarDay.priority = priority
        }
    }

    //Test
    addTask(10, 30, 2022, "Sedra Rabe", "High");
    addTask(10, 12, 2022, "Taindaka", "Medium");
    addTask(10, 8, 2022, "Serge", "Low");
    addTask(11, 1, 2022, "Serge", "High");

    currentDays.push(calendarDay);
    }
    return (
        <div className='table-content'>
            {currentDays.map((day) => {
                return(
                    <div className={"calendar-day"+ (day.currentMonth ? " current": "") + (day.selected ? " selected":"") +" " + (day.priority)} onClick={()=> {props.changeCurrentDay(day)}}>
                        <p>{day.number}</p>
                        <br></br>
                        {day.author && <p>{day.author}</p>}
                    </div>
                )
            })}
        </div>
    )
}


export default CalendarDays;
