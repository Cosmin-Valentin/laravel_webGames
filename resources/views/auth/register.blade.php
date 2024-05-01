<x-layout>
    <x-slot:heading>
        Register
    </x-slot:heading>

    <form action="{{ route('register') }}" method="POST">
        @csrf
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <x-forms.field>
                        <x-forms.label for='first_name'>First Name</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='first_name' id='first_name' required/>
                            <x-forms.error name='first_name' />
                        </div>
                    </x-forms.field>

                    <x-forms.field>
                        <x-forms.label for='last_name'>Last Name</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='last_name' id='last_name' required/>
                            <x-forms.error name='last_name' />
                        </div>
                    </x-forms.field>

                    <x-forms.field>
                        <x-forms.label for='last_name'>Username</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='username' id='username' required/>
                            <x-forms.error name='username' />
                        </div>
                    </x-forms.field>


                    <x-forms.field>
                        <x-forms.label for='email'>Email</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='email' id='email' type='email' required/>
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
                    <x-forms.field>
                        <x-forms.label for='password_confirmation'>Confirm Password</x-forms.label>
                        <div class="mt-2">
                            <x-forms.input name='password_confirmation' id='password_confirmation' type='password' required/>
                            <x-forms.error name='password_confirmation' />
                        </div>
                    </x-forms.field>
                </div>
            </div>
        </div>
    
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <a href="{{ route('home') }}" class="text-sm font-semibold leading-6 text-gray-900">Cancel</a>
            <x-forms.button>Register</x-forms.button>
        </div>
    </form>
</x-layout>