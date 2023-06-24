let status = {
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
    status[value] = !status[value]
    const sum = Object.values(status).reduce((a,b) => a || b, false)
    if(!sum) {
        status['all'] = true
    }
    if (value =='all' && status['all']) {
        status['storytelling'] = false
        status['design'] = false
        status['authoring'] = false
    } else if (value!= 'all' && sum) {
        status['all'] = false
    } else if (!sum) {
        status['all'] = true
    }

    if (status['storytelling'] && status['design'] && status['authoring']) {
        status['all'] = true 
        status['storytelling'] = false
        status['design'] = false
        status['authoring'] = false
    }
    const tags = []
    d3.select('.filter-panel').selectAll('div').each(function(){
        const value = this.getAttribute("data-value")
        if (status[value]) {
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