<x-layout>
    <x-slot:heading>
        Runner Game
    </x-slot:heading>

    <div class="runner-container">
        <div class="score">
            <span class="title">Score: </span>
            <b>0</b>
        </div>
        <p class="info">Press KEY UP or KEY DOWN to start</p>
        <div id="game">
            <img class='sky' src="{{ asset('images/sky.jpg') }}" alt="pixel sky" style="opacity:1">
            <img class='sky hidden' src="{{ asset('images/sky2.jpg') }}" alt="pixel sky2">
            <img class='sky hidden' src="{{ asset('images/sky3.jpg') }}" alt="pixel sk3">
            <div id="chicken">
                <img class="chicken" src="{{ asset('images/chicken.png') }}" alt="chicken">
                <img class="leg" src="{{ asset('images/leg.png') }}" alt="chicken leg">
            </div>
            <div id="obstacle">
                <img class="fox" src="{{ asset('images/fox.png') }}" alt="fox">
            </div>
            <div id="eagle">
                <img class="eagle" src="{{ asset('images/eagle.png') }}" alt="eagle">
            </div>
        </div>
        <div id="ground">
            <img class='ground' src="{{ asset('images/ground.png') }}" alt="ground">
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
        <div id="prompt" class="hidden">
            <button class="restart">Play Again?</button>
        </div>
    </div>
</x-layout>