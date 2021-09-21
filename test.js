const widget = new ListWidget()

async function get_data() {
    let json_req = new Request('https://mastertemple.github.io/test_data/bf_rank.json')
    let data = await json_req.loadJSON()
    return data
}

let data = await get_data()
let column0 = widget.addStack()
let column1 = widget.addStack()

let league_stack = column0.addStack()
league_stack.layoutVertically()
league_stack.addText('League')
league_stack.addText(data.league)
league_stack.addSpacer(15)
column0.addSpacer(5)

let br_stack = column0.addStack()
br_stack.layoutVertically()
br_stack.addText('BR')
br_stack.addText(data.br.toString())
br_stack.addSpacer(15)
column0.addSpacer(5)

let rank_stack = column0.addStack()
rank_stack.layoutVertically()
rank_stack.addText('Ranking')
rank_stack.addText(data.rank)
rank_stack.addSpacer(15)
column0.addSpacer(5)



let win_stack = column1.addStack()
win_stack.layoutVertically()
win_stack.addText('Wins')
win_stack.addText(data.wins.toString())
win_stack.addSpacer(15)
column1.addSpacer(5)

let loss_stack = column1.addStack()
loss_stack.layoutVertically()
loss_stack.addText('Losses')
loss_stack.addText(data.losses.toString())
loss_stack.addSpacer(15)
column1.addSpacer(5)

let draw_stack = column1.addStack()
draw_stack.layoutVertically()
draw_stack.addText('Draws')
draw_stack.addText(data.draws.toString())
draw_stack.addSpacer(15)
column1.addSpacer(5)


Script.setWidget(widget)
Script.complete()
widget.presentMedium()