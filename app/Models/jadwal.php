<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class jadwal extends Model
{
    use HasFactory;
    protected $fillable = ['sabtu', 'ahad, ', 'senin', 'selasa', 'rabu', 'kamis'];
}

