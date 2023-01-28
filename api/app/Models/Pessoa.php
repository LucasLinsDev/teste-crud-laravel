<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categoria;

class Pessoa extends Model
{
    use HasFactory;
    protected $guarded=[];
    function categoria(){
        return $this->belongsTo(Categoria::class);
    }
}
