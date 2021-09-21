const widget = new ListWidget()

async function get_data() {
    let json_req = new Request('https://mastertemple.github.io/test_data/bf_rank.json')
    let data = await json_req.loadJSON()
    return data
}
async function load_image(img_url) {

    const req = new Request('https://secure.download.dm.origin.com/production/avatar/prod/userAvatar/37889711/416x416.PNG')
    let img = await req.loadImage()
    // let icon = await getImage('test.png', img)
    // return icon 
    return img
}
let data = await get_data()
let column0 = widget.addStack()
let stack1 = column0.addStack()
let image = load_image(data.profile_picture)
stack1.addImage(image)
// widget.addText(JSON.stringify(data, null, 2))
Script.setWidget(widget)
Script.complete()
