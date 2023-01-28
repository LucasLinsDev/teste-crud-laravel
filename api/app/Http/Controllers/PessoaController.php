<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pessoa;
class PessoaController extends Controller
{

    public function index(Request $request)
    {
        $peoplePerPage = $request->input('per_page', 10);
        $pessoas= Pessoa::with('categoria')->paginate(10);
        return response()->json($pessoas);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {



            $pessoa = Pessoa::create($request->all());
            return response()->json($pessoa,201);



    }


    public function show($id,Request $request)
    {


        $pessoa= Pessoa::with('categoria')->findOrFail($id);
        return response()->json($pessoa);

    }



    public function edit($id)
    {



    }


    public function update(Request $request, $id)
    {

        $pessoa = Pessoa::findOrFail($id);
        $pessoa->update($request->all());

        return response()->json([
            'message'=>'Pessoa atualizada com sucesso.',
        ],200);

    }

    public function destroy($id)
    {

        $pessoa = Pessoa::findOrFail($id);
        $pessoa->delete();

        return response()->json([
            'message'=>'Pessoa excluida com sucesso.'
        ],200);

    }
}
