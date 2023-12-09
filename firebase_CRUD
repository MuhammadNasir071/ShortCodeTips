<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Contract\Database;

class UserController extends Controller
{
    protected $database;
    protected $tableName;
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tableName = 'users';
    }

    public function index()
    {
        $users = $this->database->getReference($this->tableName)->getValue();
        return view('firebase.users', compact('users'));
    }

    public function create()
    {
        return view('firebase.create-user');
    }

    public function store(Request $request)
    {
        $postData = [
            'user_name' => $request->name,
            'user_phone' => $request->contact,
            'user_email' => $request->email
        ];
        $postRef = $this->database->getReference($this->tableName)->push($postData);

        if($postRef){
            return redirect()->route('users')->with('message', 'User added successfully');
        }
        else{
            return redirect()->route('users')->with('message', 'Something went wrong');
        }
    }

    public function edit($key)
    {
        $user = $this->database->getReference($this->tableName)->getChild($key)->getValue();
        return view('firebase.edit-user', compact('user', 'key'));
    }

    public function Update(Request $request, $key)
    {
        $updateData = [
            'user_name' => $request->name,
            'user_phone' => $request->contact,
            'user_email' => $request->email
        ];

        $updateRef =  $this->database->getReference($this->tableName. '/'.$key)->update($updateData);

        if($updateRef){
            return redirect()->route('users')->with('message', 'User Update successfully');
        }
        else{
            return redirect()->route('users')->with('message', 'Something went wrong');
        }
    }

    public function delete($key)
    {
        $delRef = $this->database->getReference($this->tableName. '/'. $key)->remove();
        if($delRef){
            return redirect()->route('users')->with('message', 'User delete successfully');
        }
        else{
            return redirect()->route('users')->with('message', 'Something went wrong');
        }
    }
}
