let btnStatus = {
    'all': true,
    'storytelling': false,
    'design': false,
    'authoring': false
}
let tagMapping = {
    "all": ["storytelling", "patterns","design", "authoring", "generation"],
    "storytelling": ["patterns", "survey"],
    "design": ["design", "evaluation"],
    "authoring": ["authoring", "generation"]
}
d3.select('.all-button').classed('active', true)

function filterPub(btn) {
    const value = btn.getAttribute("data-value")
    btnStatus[value] = !btnStatus[value]
    if (value === 'all') {
        btnStatus = {
            'all': true,
            'storytelling': false,
            'design':false,
            'authoring': false
        }
    } else {
        if (btnStatus[value] === false) {
            btnStatus = {
                'all': true,
                'storytelling': false,
                'design': false,
                'authoring': false
            }
        } else {
            btnStatus = {
                'all': false,
                'storytelling': false,
                'design': false,
                'authoring': false
        }
        btnStatus[value] = true
    }
}

    const tags = []
    d3.select('.filter-panel').selectAll('div').each(function(){
        const value = this.getAttribute("data-value")
        if (btnStatus[value]) {
            d3.select(this).classed('active', true)
            tags.push(...tagMapping[value])
        } else {
            d3.select(this).classed('active', false)
        }
    })

    d3.selectAll('.publication').style('display', 'none')
    tags.forEach(v => {
        d3.selectAll(`.tag_${v}`).style('display', 'flex')
    })
    





}