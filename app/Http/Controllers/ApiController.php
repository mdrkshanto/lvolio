<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function editHome($id)
    {
        $home = Home::find($id);
        return response()->json(["editData" => $home], 200);
    }
    public function latestHomeData()
    {
        $home = Home::latest('updated_at')->where('status', 'active')->first();
        return response()->json(['latestHomeData' => $home], 200);
    }
    public function allHomeData()
    {
        $home = Home::all();
        return response()->json(['allHomeData' => $home], 200);
    }
}
