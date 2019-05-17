@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @if (session('resent'))
                <div class="alert alert-success" role="alert">
                    Un lien de vérification vous a été envoyé à votre adresse e-mail.
                </div>
            @endif

            Vérifiez votre boîte e-mail à la recherche du lien de vérification.
            Si vous n'avez pas reçu d'e-mail, <a href="{{ route('verification.resend') }}">cliquez ici pour en recevoir un nouveau</a>.
        </div>
    </div>
</div>
@endsection
