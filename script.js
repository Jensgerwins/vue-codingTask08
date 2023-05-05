const app = Vue.createApp({
    data() {
        return {
            x: 12,
            y: 4,
            fruits: [
                "🍏 Apple",
                "🍌 Banana",
                "🍉 Melon",
                ":) Blueberry",
                "🍓 Strawberry",
                "🍍 Ananas",
                "🥭 Mango"
            ]
        };
    },
    methods: {
        removeFruit(fruitRemoved) {
            this.fruits = this.fruits.filter((fruit) => {
                return fruit !== fruitRemoved;
            });
        }
    }
}).mount("#app")