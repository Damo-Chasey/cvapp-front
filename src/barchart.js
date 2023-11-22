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
        const response = await fetch('http://13.239.20.181:3001/');
        console.log("Fetched entries (chart)");

        updateChartData(await response.json());
    }

    const updateChartData = (data) => {
        setCharData({labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White'],
        datasets: [{
            label: '# of occurances',
            data: [
                countEntries("red", data), 
                countEntries("blue", data), 
                countEntries("green", data), 
                countEntries("yellow", data), 
                countEntries("orange", data), 
                countEntries("purple", data),
                countEntries("pink", data),
                countEntries("black", data),
                countEntries("white", data)],
            backgroundColor: ['#EE685D', '#5D87EE', '#5DEE5E', '#EAEE5D', '#EE9D5D', '#BD5DEE', '#F052E8', '#121212', '#F3F3F3'],
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

//https://desolate-eyrie-13469-959621a3e284.herokuapp.com/users