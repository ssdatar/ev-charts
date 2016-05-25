$(document).ready(function() {
	
	// Breach and nuisance vs other evictions
	$(function () {
    $('#evictions-chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Breach and nuisance v/s other evictions'
        },
        subtitle: {
            text: 'Source: San Francisco Rent Board'
        },
        xAxis: {
            categories: ['2011', '2012', '2013', '2014', '2015'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of eviction notices'
            }
        },
        // tooltip: {
        //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        //     footerFormat: '</table>',
        //     shared: true,
        //     useHTML: true
        // },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        credits: {
			     enabled: false
			  },
        series: [{
            name: 'Breach',
            data: [502,414,551,673,622]

        }, {
            name: 'Nuisance',
            data: [212,307,312,347,326]

        }, {
            name: 'Others',
            data: [582,910,1007,962,1132]

        }]
    	});
	});

	$(function () {
    $('#top5-chart').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'SF neighborhoods with most evictions'
        },
        subtitle: {
            text: 'Source: San Francisco Rent Board'
        },
        xAxis: {
            categories: ['2011', '2012', '2013', '2014', '2015'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of eviction notices'
            }
        },
        // tooltip: {
        //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        //     footerFormat: '</table>',
        //     shared: true,
        //     useHTML: true
        // },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        credits: {
			     enabled: false
			  },
        series: [{
            name: 'Mission',
            data: [126,170,237,200,175]

        }, {
            name: 'Sunset',
            data: [59,121,107,127,158]

        }, {
            name: 'South of Market',
            data: [37,268,124,63,47]

        }, {
            name: 'Tenderloin',
            data: [56,64,96,108,173]

        }, {
            name: 'Lakeshore',
            data: [201,9,98,85,82]

        }]
    	});
	});
});