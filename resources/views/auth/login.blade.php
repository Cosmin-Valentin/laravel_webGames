<x-layout>
    <x-slot:heading>
        Log In
    </x-slot:heading>

    <form action="{{ route('login') }}" method="POST">
        @csrf
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <x-forms.field>
                        <x-forms.label for='email'>Email</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='email' id='email' :value="old('email')" type='email' required/>
                            <x-forms.error name='email' />
                        </div>
                    </x-forms.field>

                    <x-forms.field>
                        <x-forms.label for='password'>Password</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='password' id='password' type='password' required/>
                            <x-forms.error name='password' />
                        </div>
                    </x-forms.field>
                </div>
            </div>
        </div>
    
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="{{ route('home') }}" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
            <x-forms.button>Log In</x-forms.button>
        </div>
    </form>
</x-layout>