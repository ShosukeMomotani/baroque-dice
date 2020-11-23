<template>
  <div class="hello">
    <b-container>
      <b-nav class="nav-tabs justify-content-center">
        <b-nav-item
          v-for="p of players"
          :key="p.name"
          v-bind:active="player === p"
          v-bind:class="{
            'name-active':player === p,
            'name-enabled': !p.enabled}"
          v-on:click="player = p"
          v-long-press="1000"
          @long-press-start="onLongPressStart"
          @long-press-stop="onLongPressStop"
        >{{ p.name }}</b-nav-item>
      </b-nav>
      <div v-for="p of players" :key="p.name" v-show="player === p" class="my-5">
        <label for="num-ratio" class="mx-2">ハンデ：</label>
        <b-form-spinbutton id="num-ratio" v-model="p.ratio" min="-10" max="10" inline></b-form-spinbutton>
      </div>
      <button class="btn btn-primary my-5" type="button" v-on:click="start()">スタート</button>
    </b-container>
    <div class="container mt-4">
      <p
        class="h1 p-item"
        v-bind:class="{'dice-number': animation}"
        :style="{'background-image':'url(' + assetsImage + ')'}"
      >{{ number }}</p>
    </div>
  </div>
</template>

<script>
import LongPress from "vue-directive-long-press";

import AssetsImageKoura from "../assets/koura.png";
import AssetsImageCoin from "../assets/coin.png";
import AssetsImageKinoko from "../assets/kinoko.png";
import AssetsImageFlower from "../assets/flower.png";
import AssetsImageStar from "../assets/star.png";
import AssetsImage1up from "../assets/1up.png";
const assetsImages = {
  1: AssetsImageKoura,
  2: AssetsImageCoin,
  3: AssetsImageKinoko,
  4: AssetsImageFlower,
  5: AssetsImageStar,
  6: AssetsImage1up
};

const _diceBaroque = ratio => {
  ratio = ratio || 0;
  //console.log(ratio);
  const result = {};
  for (let i of [1, 2, 3, 4, 5, 6]) {
    if (ratio >= 0) {
      result[i] = Math.random() * (1 + (i - 1) * 0.01 * ratio);
    } else {
      result[i] = Math.random() * (1 - (6 - i) * 0.01 * ratio);
    }
  }
  const max = Math.max(...Object.values(result));
  return parseInt(Object.keys(result).find(key => result[key] === max));
};

const _rate1 = a => {
  return (
    1 /
    (6 * (1 + 5 * a) * (1 + 4 * a) * (1 + 3 * a) * (1 + 2 * a) * (1 + 1 * a))
  );
};
const _rate6 = a => {
  return (
    (1 / (6 * (1 + 4 * a) * (1 + 3 * a) * (1 + 2 * a) * (1 + 1 * a)) +
      ((1 + 1 * a) ** 5 - 1) /
        (5 * (1 + 4 * a) * (1 + 3 * a) * (1 + 2 * a) * (1 + 1 * a)) +
      ((1 + 2 * a) ** 4 - (1 + 1 * a) ** 4) /
        (4 * (1 + 4 * a) * (1 + 3 * a) * (1 + 2 * a)) +
      ((1 + 3 * a) ** 3 - (1 + 2 * a) ** 3) / (3 * (1 + 4 * a) * (1 + 3 * a)) +
      ((1 + 4 * a) ** 2 - (1 + 3 * a) ** 2) / (2 * (1 + 4 * a)) +
      a) /
    (1 + 5 * a)
  );
};
for (let a of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  console.log(0.01 * a, { 1: _rate1(0.01 * a), 6: _rate6(0.01 * a) });
}

let interval = null;
const drumroll = new Audio(require("../assets/drumroll.mp3"));
const playersData = [
  { name: "はやと", color: "#ddffff" },
  { name: "さき", color: "#ffddff" },
  { name: "パパ", color: "#ddffdd" },
  { name: "ママ", color: "#ffdddd" }
];
const players = playersData.map(data => ({ ...data, ratio: 0, enabled: true }));

export default {
  name: "HelloWorld",
  props: {},
  data: function() {
    return {
      players,
      player: players[0],
      assetsImage: AssetsImageKoura,
      number: 1,
      animation: false
    };
  },
  watch: {
    number: function() {
      this.assetsImage = assetsImages[this.number];
    },
    player: function() {
      this.$emit("setBackgroundColor", this.player.color || "#ffffff");
    }
  },
  methods: {
    start: function() {
      // start drumroll se
      drumroll.currentTime = 0;
      drumroll.play();

      if (interval) clearInterval(interval);
      this.animation = false;
      const startTime = Date.now();
      interval = setInterval(() => {
        console.log(this.player.ratio);
        this.number = _diceBaroque(this.player.ratio);
        //console.log(this.number);
        if (Date.now() - startTime > 3000) {
          clearInterval(interval);
          this.animation = true;
          this.player = this.players[
            (this.players.indexOf(this.player) + 1) % this.players.length
          ];
        }
      }, 10);
    },
    onLongPressStart() {
      console.log("onLongPressStart()");
    },
    onLongPressStop() {
      console.log("onLongPressStop()");
    }
  },
  directives: {
    "long-press": LongPress
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dice-number {
  animation: dice-number-scaling 0.5s ease 0s 1 normal;
  -webkit-animation: dice-number-scaling 0.5s ease 0s 1 normal;
}

.p-item {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
}

.name-active {
  font-weight: 600;
}

.name-enabled {
  background-color: #999999;
}

@keyframes dice-number-scaling {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
