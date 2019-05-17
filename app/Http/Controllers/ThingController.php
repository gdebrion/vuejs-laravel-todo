<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddThingRequest;
use App\Http\Resources\ThingResource;
use App\Thing;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ThingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return ThingResource::collection(Thing::where('user_id', $user->id)->orderBy('created_at', 'DESC')->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddThingRequest $request)
    {
        $thing          = new Thing;
        $thing->user_id = Auth::user()->id;
        $thing->title   = $request->title;
        $thing->save();

        return new ThingResource($thing);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Thing  $thing
     * @return \Illuminate\Http\Response
     */
    public function show(Thing $thing)
    {
        return new ThingResource($thing);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Thing  $thing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thing $thing)
    {
        $thing->title = $request->title;
        $thing->save();

        return new ThingResource($thing);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Thing  $thing
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thing $thing)
    {
        $thing->delete();

        return new ThingResource($thing);
    }
}
