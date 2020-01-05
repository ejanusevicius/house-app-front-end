export default [
    {
        name: 'Overall condition of the house',
        type: 'OverallCond',
        selectData: [
            {title: 'Very Poor', value: '1'},
            {title: 'Poor', value: '2'},
            {title: 'Fair', value: '3'},
            {title: 'Below Average', value: '4'},
            {title: 'Average', value: '5'},
            {title: 'Above Average', value: '6'},
            {title: 'Good', value: '7'},
            {title: 'Very Good', value: '8'},
            {title: 'Excellent', value: '9'},
            {title: 'Very Excellent', value: '10'}
        ]
    },
    {
        name: 'Size of garage (car capacity)',
        type: 'GarageCars',
        selectData: [
            {title: 'No cars', value: '0'},
            {title: 'One car', value: '1'},
            {title: 'Two cars', value: '2'},
            {title: 'Three cars', value: '3'},
            {title: 'Four cars', value: '4'},
        ]
    },
    {
        name: 'Heating type',
        type: 'Heating',
        selectData: [
            {title: 'Floor Furnace', value: 'Floor'},
            {title: 'Gas forced warm air furnace', value: 'GasA'},
            {title: 'Gas hot water or steam heat', value: 'GasW'},
            {title: 'Gravity furnace', value: 'Grav'},
            {title: 'Hot water or steam heat other than gas', value: 'OthW'},
            {title: 'Wall furnace', value: 'Wall'},
        ]
    },
    {
        name: 'Heating Quality & Condition',
        type: 'HeatingQC',
        selectData: [
            {title: 'Excellent', value: 'Ex'},
            {title: 'Good', value: 'Gd'},
            {title: 'Average', value: 'TA'},
            {title: 'Fair', value: 'Fa'},
            {title: 'Poor', value: 'Po'},
        ]
    },
    {
        name: 'Condition of the basement',
        type: 'BsmtCond',
        selectData: [
            {title: 'Excellent', value : 'Ex'},
            {title: 'Good', value : 'Gd'},
            {title: 'Typical - slight dampness', value : 'TA'},
            {title: 'Fair - dampness, cracking', value : 'Fa'},
            {title: 'Poor - severe cracking or wetness', value : 'Po'},
            {title: 'No Basement', value : 'NA'},
        ]
    },
    {
        name: 'Date of construction',
        type: 'YearBuilt',
        selectData: []
    }
]