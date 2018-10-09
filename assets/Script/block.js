cc.Class({
  extends: cc.Component,
  properties: {

  },
  onLoad () {
    this.node.on("click", (e) => {
      console.log(e)
      cc.loader.loadRes("resources/game_desk_bg_6p.jpg", cc.SpriteFrame, (err, spriteFrame) => {
        this.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      })
    })
  }
})