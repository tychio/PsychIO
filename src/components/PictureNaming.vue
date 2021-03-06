<template>
  <div v-show="status" :class="['stage', 'stage-' + status]">
    <div class="stage-pic" :style="{
      'background-image': 'url(' + imageSrc + ')'
    }"></div>
    <i class="icon icon-cross"></i>
    <i class="icon icon-dot"></i>
    <i class="icon icon-asterisk"></i>
    <i class="icon icon-lang">{{languageSay}}</i>
  </div>
</template>

<script>
import * as _ from 'lodash'
import MediaStreamRecorder from 'msr'

const SpeechRecognition = window.webkitSpeechRecognition

export default {
  name: 'PictureNaming',
  props: ['item', 'language'],
  data: function () {
    return {
      startDate: 0,
      status: null,
      result: {
        name: this.item.name,
        isEnd: this.item.isEnd,
        switch: '',
        language: this.item.language,
        response: 0,
        record: null,
        src: ''
      },
      recognition: new SpeechRecognition(),
      media: null
    }
  },
  watch: {
    status: function () {
      if (this.status === 'end') {
        this.recognition.onspeechstart = () => {}
        this.media.stop()
        this.record()
        this.$emit('end', this.result)
      } else if (this.status === 'playing') {
        this.startDate = new Date()
        this.media.start(5000)
      } else if (this.status === 'prompt') {
        this.recognition.start()
      }
    }
  },
  methods: {
    loadRecorder: function () {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
      navigator.getUserMedia({
        audio: true
      }, stream => {
        this.media = new MediaStreamRecorder(stream)
        this.media.mimeType = 'audio/wav'
        this.media.ondataavailable = blob => {
          this.result.record = blob
        }
      }, error => {
        console.error('media error', error)
      })
    },
    record: function (callback) {
      if (this.startDate) {
        this.result.response = _.min([4000, new Date() - this.startDate])
        this.result.src = this.imageSrc
        this.result.switch = this.isChanged
        this.startDate = 0
        callback && callback()
      }
    },
    setStatus: function (status, timeout) {
      if (timeout) {
        setTimeout(() => {
          this.status = status
        }, timeout)
      } else {
        this.status = status
      }
    }
  },
  computed: {
    languageSay: function () {
      return {
        chinese: '说',
        uyghur: 'سۆزلەڭ',
        english: 'Say'
      }[this.item.language]
    },
    imageSrc: function () {
      return './static/picture-naming/' + this.item.name + '.gif'
    },
    isChanged: function () {
      let isChange = 'Not changed'
      if (this.item.isChange) {
        isChange = 'Changed'
      } else if (this.item.isChange === null) {
        isChange = 'First'
      }
      return isChange
    }
  },
  mounted: function () {
    this.loadRecorder()
    const steps = [1000, 250, 500, 4000]
    if (this.item.isEnd) {
      steps.push(1000)
    }
    this.recognition.onspeechstart = () => {
      console.log(this.status)
      if (this.status === 'playing') {
        this.record(() => {
          this.status = 'saying'
        })
      } else {
        const onspeechstart = this.recognition.onspeechstart
        this.recognition = new SpeechRecognition()
        this.recognition.onspeechstart = onspeechstart
        this.recognition.start()
      }
    }
    this.setStatus('start')
    this.setStatus('ready', steps[0])
    this.setStatus('prompt', _.sum(_.slice(steps, 0, 2)))
    this.setStatus('playing', _.sum(_.slice(steps, 0, 3)))
    if (this.item.isEnd) {
      this.setStatus('group', _.sum(_.slice(steps, 0, 4)))
    }
    this.setStatus('end', _.sum(steps))
  }
}
</script>

<style scoped>
.stage {
  position: absolute;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}

.stage-pic {
  display: none;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
  transform: scale(1.125);
}

.stage i.icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px;
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-style: normal;
  font-size: 100px;
}

i.icon.icon-cross:before {
  content: '+';
}
i.icon.icon-asterisk:before {
  content: '*';
  line-height: 240px;
}

i.icon.icon-dot:before {
  content: '\00b7';
  font-size: 200px;
}

.stage-prompt i.icon.icon-lang {
  white-space: nowrap;
  font-size: 56px;
}

.stage-prompt i.icon.icon-lang,
.stage-saying i.icon.icon-dot,
.stage-group i.icon-asterisk,
.stage-start i.icon.icon-cross {
  display: block;
}

.stage-playing .stage-pic {
  display: block;
}

.stage-end {
  display: none;
}
</style>
