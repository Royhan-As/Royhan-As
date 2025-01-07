<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumni extends Model
{
    use HasFactory;
    protected $fillable = ['nisn', 'nama', 'alamat', 'Tahun Berhenti', 'phone', 'status'];
}
