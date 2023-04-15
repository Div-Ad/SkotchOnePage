<template lang="pug">
    button.icon-tt(@mouseenter="getPosition", :style="{width: size*hb + 'px', height: size*hb + 'px'}", :aria-label="tip")
        i(
            :class="'ic-' + i",
            :style="{fontSize: size + 'px' , color: c}"
        )
        .tt-msg#ToolTip(
            :style="{animationDelay: delay + 's' , " +
            "top: iconY + 'px' , " +
            "left: iconX - size + 'px', " +
            "marginTop: - size*2 - offsetY + 'px', " +
            "marginLeft: - 50% - size/2 - offsetX + 'px'}"
            )
            span {{ tip }}
</template>


<script>

export default {
    name: "IconTip",

    props: {
        // define the size of the hitbox, relatively to the size of the icon.
        hb: {
            type: String,
            default: 2,
        },
        // define the size of the icon in pixels
        size: {
            type: String,
            default: 24,
            required: true,
        },
        i: {
            type: String,
            default: 'helpboard',
            required: true,
        },

        tip: {
            type: String,
            default: 'tip=""',
            required: true,
        },
        c: {
            type: String,
            default: '',
            required: true,
        },
        delay: {
            type: String,
            default: '0.7',
        }
    },

    data() {
        return {
            iconX: 0,
            iconY: 0,
            offsetX: 0,
            offsetY: 0,
        }
    },

    methods: {
        getPosition: function (event) {
            this.iconX = event.clientX
            this.offsetX = event.offsetX
            this.iconY = event.clientY
            this.offsetY = event.offsetY
            this.clientHeight = document.getElementById('ToolTip').clientHeight
        },
    }
}
</script>


<style lang="sass">

.icon-tt
    display: flex
    align-items: center
    justify-content: center
    i
        opacity: 0.75
        transition: 0.15s
    &:hover i, &:focus i
        opacity: 1

.tt-msg
    display: none
    align-items: center
    justify-content: center
    width: 96px
    height: 48px
    border-radius: 4px
    position: fixed
    z-index: 9999
    text-align: center
    padding: 4px 8px
    background-color: rgba(0, 0, 0, 0.7)
    font: 300 11px/12px monospace
    text-transform: uppercase
    color: white
    &:after
        transform: rotate(90deg)
        bottom: -11px
        content: '\e976'
        font-family: 'skotch'
        font-size: 16px
        line-height: 16px
        position: absolute
        left: calc(50% - 16px / 2)
        color: rgba(50, 50, 50, 0.9)

    &.left
        left: calc(-96px - 8px)
        top: calc(50% - 32px / 2)
        &:after
            transform: rotate(0deg)
            bottom: calc(50% - 16px / 2)
            right: -61px
        &.big
            height: 48px
            top: calc(50% - 48px / 2)

    &.right
        right: calc(-96px - 8px)
        left: initial
        &:after
            transform: rotate(180deg)
            bottom: calc(50% - 16px / 2)
            left: -11px

    &.top
        top: -36px
        &.big
            height: 48px
            top: -48px
        &:after
            transform: rotate(90deg)
            bottom: -11px
        &.t-64px
            top: -64px
        &.t-48px
            top: -48px

    &.bottom
        top: initial
        bottom: -40px
        &.big
            height: 48px
            bottom: -56px
        &:after
            transform: rotate(270deg)
            left: calc(50% - 16px / 2)
            top: -10px
        &.b-64px
            bottom: -64px
        &.b-48px
            bottom: -48px

.icon-tt:hover .tt-msg
    animation: openit 0.1s backwards
    display: flex

@keyframes openit
    from
        transform: scale(0)
    to
        transform: scale(1)

</style>