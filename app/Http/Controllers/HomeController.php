<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backEnd');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $home = new Home();

        $img = $request->file('bgImg');
        $imgName = time() . rand() . '.' . $img->extension();
        $img->move(public_path('frontEnd/assets/img/home/bg'), $imgName);
        $bgImg = 'frontEnd/assets/img/home/bg/' . $imgName;
        $home->bgImg = $bgImg;
        $home->bgColor = $request->bgColor;
        $home->bgOpacity = $request->bgOpacity;
        $home->name = $request->name;
        $home->focusTitle = $request->focusTitle;
        $home->shortDescription = $request->shortDescription;
        $home->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return view('backEnd');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    // public function editHome()
    // {
    //     return view('backEnd');
    // }
    public function edit()
    {
        // $home = Home::find($id);
        // return response()->json(["editData" => $home], 200);
        return view('backEnd');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $home = Home::find($id);
        if ($request->hasFile('bgImg')) {
            $img = $request->file('bgImg');
            $imgName = time() . rand() . '.' . $img->extension();
            $img->move(public_path('frontEnd/assets/img/home/bg'), $imgName);
            $bgImg = 'frontEnd/assets/img/home/bg/' . $imgName;
            $home->bgImg = $bgImg;
            unlink($home->bgImg);
        }
        $home->bgColor = $request->bgColor;
        $home->bgOpacity = $request->bgOpacity;
        $home->name = $request->name;
        $home->focusTitle = $request->focusTitle;
        $home->shortDescription = $request->shortDescription;
        $home->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function destroy(Home $home)
    {
        //
    }
}
