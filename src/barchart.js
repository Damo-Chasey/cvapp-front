import React, {useState, useEffect} from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

function BarChart(){
    const [chartData, setCharData] = useState({
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple'],
        datasets: [{
            label: '# of occurances',
            data: [0, 0, 0, 0, 0, 0],
            borderWidth: 1
        }]
    })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('https://desolate-eyrie-13469-959621a3e284.herokuapp.com/users');
        console.log("Fetched entries (chart)");

        updateChartData(await response.json());
    }

    const updateChartData = (data) => {
        setCharData({labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple'],
        datasets: [{
            label: '# of occurances',
            data: [
                countEntries("red", data), 
                countEntries("blue", data), 
                countEntries("green", data), 
                countEntries("yellow", data), 
                countEntries("orange", data), 
                countEntries("purple", data)],
            backgroundColor: ['#EE685D', '#5D87EE', '#5DEE5E', '#EAEE5D', '#EE9D5D', '#BD5DEE'],
        }]});
        console.log("Chart data updated");
    }

    const countEntries = (group, data) => {
        var count = 0;
        for(var i = 0; i < data.length; i++){
            
            if(data[i].colour.toLowerCase() == group){
                count++;
            }
        }
        return count;
    }

    return(
        <div>
            {console.log("Displaying graph")}
            <Bar
                data={chartData} 
            />
        </div>
    )
}

export default BarChart;


//const countEntries = (group) => {
//    var count = 0;
//    for(var i = 0; i < colorData.length; i++){
//        if(colorData[i].colour == group){
//            count++;
//        }
//    }
//    return count;
//}

//const updateChartData = () => {
//    setCharData({labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple'],
//    datasets: [{
//        label: '# of occurances',
//        data: [
//            countEntries("Red"), 
//            countEntries("Blue"), 
//            countEntries("Green"), 
//            countEntries("Yellow"), 
//            countEntries("Orange"), 
//            countEntries("Purple")],
//        borderWidth: 1
//    }]});
//    console.log("Chart data updated");
//}