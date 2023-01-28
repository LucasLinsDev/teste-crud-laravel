<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Pessoa;
class Categoria extends Model
{
    use HasFactory;
    protected $table='categoria';
    protected $guarded=[];
  public function pessoas(){
    return $this->hasMany(Pessoa::class);
  }
}

