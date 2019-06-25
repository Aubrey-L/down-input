Component({
  behaviors: ['wx://form-field'],
  externalClasses: ['text-class'],
  data: {
    // isShow:false

  },
  properties: {
    isShow: {
      type: Boolean,
      value: true
    },
    searchList: {
      type: Array,
      value: []
    },
    InputValue: {
      type: String,
      value: ''
    },
    leftName: {
      type: String,
      value: ''
    },
  },
  ready() {
    this.setData({
      value: this.data.InputValue
    })
  },
  methods: {
    getValues(e) {
      this.triggerEvent('getInput', {
        value: e.detail.value
      })
    },
    lower() {
      this.triggerEvent('lower')
    },
    _child(e) {
      console.log(e.currentTarget.dataset.index)
      const value = this.data.searchList[e.currentTarget.dataset.index]
      this.setData({
        isShow: !this.data.isShow,
        InputValue: value
      })
      this.triggerEvent('getchild', {
        value: e.currentTarget.dataset.index
      })
    },
    _bindfocus(e) {
      console.log(e)
      this.setData({
        isShow: false
      })
    },
    getInputValue(e) {
      this.setData({
        value: e.detail.value
      })
    },
    _concealShow() {
      this.setData({
        isShow: !this.data.isShow
      })
    }
  }
})