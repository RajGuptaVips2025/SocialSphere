<template>
    <div class="dev-controls">
        <button class="light-dark-button" @click="toggleLightMode">
            <div v-if="isLightMode" class="button-content">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                </svg>
                <span>Light</span>
            </div>
            <div v-else class="button-content">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                </svg>
                <span>Dark</span>
            </div>
        </button>
    </div>
    <tiptapEditor
        :value.sync="localtext"
        :warnings="warnings"
        :showMenu="showMenu"
        :maxCharacterCount="maxCharacterCount"
        :height="height"
        v-on:new-character-count="localcount = $event"
        id="unique_id"
        placeholder="write something will-ya!"
    />
</template>

<script setup>
import { ref, reactive } from 'vue';
import tiptapEditor from './tiptap-editor.vue';

const maxCharacterCount = 250; // default null for infinity
const height = '200px'; // default is 300px
const showMenu = true;

const isLightMode = ref(true);
const warnings = reactive([
    {
        value: 'red',
        message: 'did you mean...',
        options: ['read', 'reed'], // optional
        offset: 55, // identifies which instance of the word is problematic
        length: 3, // length of the word
    },
    {
        value: 'prob|emati(', // avoid regexs that go bump in the night
        isWord: false,
        message: 'What even is this?',
    },
    {
        value: '<script&gt;', // can use the real thing, or escape it
        isWord: false,
        message: 'you sure you wanted a tag?',
        overrideClass: 'underline-blue', // optional
        offset: 11,
        length: 8,
    },
    {
        value: 'green',
        message: 'I really like this!',
        overrideClass: 'underline-green', // optional
    },
    {
        value: 'orange',
        message: 'this is a bad idea!',
        overrideClass: 'underline-orange', // optional
    },
]);
const localtext = ref(
    'Hi! 👋🏻 &lt;script&gt; welcome to tiptap editor, here is a red mark blue with suggestions. Even prob|emati( strings. You can highlight with other colors, e.g blue, orange, and green!! This &lt;script&gt should not have any highlight.'
);
const localcount = ref(null);

function toggleLightMode() {
    isLightMode.value = !isLightMode.value;

    const htmlElement = document.documentElement;
    if (htmlElement) {
        if (htmlElement.getAttribute('color-scheme') === 'dark') {
            htmlElement.setAttribute('color-scheme', 'light');
        } else {
            htmlElement.setAttribute('color-scheme', 'dark');
        }
    }
}
</script>

<style>
.light-dark-button {
    background: #f4f4f5;
    margin-bottom: 8px;
    border-radius: 8px;
    border: 0;
    padding: 8px 12px 8px 12px;
    cursor: pointer;

    svg {
        height: 1rem;
        width: 1rem;
    }
}

.button-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

html[color-scheme='dark'] {
    button {
        background: #27272a;
        color: #d1d5db;
    }
}
</style>
