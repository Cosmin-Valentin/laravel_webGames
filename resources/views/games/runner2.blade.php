<x-layout>
    <x-slot:heading>
        Chicken Runner 2
        @vite(['resources/css/runner.css', 'resources/js/runner.js'])
    </x-slot:heading>

    <div class="runner-container">
        <div id="game">
            <div id="chicken">
                <img class="chicken" src="{{ asset('images/chicken.png') }}" alt="chicken">
                <img class="leg left" src="{{ asset('images/leg.png') }}" alt="chicken leg">
                <img class="leg right" src="{{ asset('images/leg.png') }}" alt="chicken leg">
            </div>
            <div id="color-bubble" class="wobble obstacle">
                <img class="bubble" src="{{ asset('images/color-bubble.png') }}" alt="bubble" >
            </div>
            <div class="cactus obstacle">
                <img src="{{ asset('images/cactus.png') }}" alt="cactus">
            </div>
            {{-- <div id="black-bubble" class="black breathe">
                <img class="bubble" src="{{ asset('images/black-bubble.png') }}" alt="bubble" >
            </div> --}}
        </div>
        <div id="ground">
            <div class="pixels group-1">
                <div class="pix1"></div>
                <div class="pix2"></div>
                <div class="pix3"></div>
                <div class="pix4"></div>
                <div class="pix5"></div>
            </div>
            <div class="pixels group-2">
                <div class="pix1"></div>
                <div class="pix2"></div>
                <div class="pix3"></div>
                <div class="pix4"></div>
                <div class="pix5"></div>
            </div>
        </div>
    </div>
</x-layout>